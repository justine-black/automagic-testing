import requests
import csv
import re
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class Book:
   def __init__(self, title, price, rating, availability):
      self.title = title
      self.price = price
      self.rating = rating
      self.availability = availability

   def __str__(self):
      return f"{self.title}"

def open_browser(url):
   options = webdriver.ChromeOptions()
   options.add_experimental_option('excludeSwitches', ['enable-logging'])
   options.add_experimental_option('detach', True)
   driver = webdriver.Chrome(options=options)

   # Navigates to the web site to scrape
   driver.get(url)
   return driver


def get_books(driver, file_name="books.csv"):

   try:
      WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//article[@class="product_pod"]')))
   except:
      return

   books = []

   rating_map = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5
   }

   while True:
      current_url = driver.current_url
      response = requests.get(current_url)
      soup = BeautifulSoup(response.content, "html.parser", from_encoding="utf-8")

      products = soup.find_all("article", class_="product_pod")

      for product in products:
         title = product.select_one("h3 > a").get('title')

         availability = True if product.find("p", class_="instock") else False

         price = product.select_one("div.product_price > p.price_color").text

         rating_class = product.find("p", class_="star-rating")["class"][-1]
         rating = rating_map.get(rating_class, None)

         book = Book(title=title, rating=rating, price=price, availability=availability)
         books.append(book)

         print(book)

      # Continue loop while next button exists
      try:
         next_button = WebDriverWait(driver, 3).until(EC.visibility_of_element_located((By.XPATH, '//li[@class="next"]/a')))
         next_button.click()
      except:
         break

   with open(file_name, mode="w", newline="") as file:
      writer = csv.writer(file)
      writer.writerow(["Title", "Price", "Rating", "Availability"])

      for book in books:
         writer.writerow([book.title, book.price, book.rating, book.availability])

   print(f"CSV file '{file_name}' created successfully")

   driver.close()
   return

def get_categories():
   url = "https://books.toscrape.com/"
   response = requests.get(url)
   soup = BeautifulSoup(response.content, "html.parser", from_encoding="utf-8")

   categories = []

   side_categories = soup.select("div.side_categories > ul > li > ul > li")

   file_path = "categories.csv"
   with open(file_path, mode="w", newline="") as file:
      writer = csv.writer(file)

      for item in side_categories:
         category = item.text.strip()
         categories.append(category)
         writer.writerow([category])

   print(f"CSV file '{file_path}' created successfully")

   return categories

def get_all_books():
   url = 'https://books.toscrape.com/'
   driver = open_browser(url)

   get_books(driver)

def get_all_from_category(category):
   categories = get_categories()
   category = category.title()

   if category in categories:
      url = 'https://books.toscrape.com/'
      driver = open_browser(url)

      try: # Check if the link to the category exists
         category_link = WebDriverWait(driver, 3).until(EC.visibility_of_element_located((By.XPATH, f'//div[@class="side_categories"]//a[contains(text(),"{category}")]')))
         category_link.click()

         file_name = "books_" + re.sub(r'[^a-zA-Z0-9]', '_', category).lower() + ".csv"
         get_books(driver, file_name)

      except:
         print("Something went wrong")
         return
   else:
      print("Invalid category")
