from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Configuring webdriver
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_experimental_option('detach', True)
# Using my local profile to use my data to skip the log in steps
options.add_argument("--user-data-dir=C:\\Users\\Justine\\AppData\\Local\\Google\\Chrome\\User Data")
options.add_argument("--profile-directory=Default")
driver = webdriver.Chrome(options=options)
url = 'https://www.twitter.com'
driver.get(url)

tweet = "Check this out! I posted this using Python with Selenium!"

# Locating the elements to post the tweet
new_post_button = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//a[@data-testid="SideNav_NewTweet_Button"]')))
new_post_button.click()

WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//div[@aria-modal="true"]')))
tweet_input = driver.find_element(By.XPATH, '//div[@data-testid="tweetTextarea_0"]')
tweet_input.send_keys(tweet)
tweet_button = driver.find_element(By.XPATH, '//div[@data-testid="tweetButton"]')
tweet_button.click()

# Navigating to my profile page
profile_button = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//a[@data-testid="AppTabBar_Profile_Link"]')))
profile_button.click()

# Validating that the first / latest tweet is the one I just posted
first_tweet = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '(//article[@data-testid="tweet"])[1]')))
first_tweet.click()

if tweet in first_tweet.text:
    print("Tweet successfully posted and is the first on my profile!")
else:
    print("Failed to post tweet")
    
time.sleep(5)

driver.close()

