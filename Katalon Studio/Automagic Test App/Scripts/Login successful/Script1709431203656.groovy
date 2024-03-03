import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://automagic-test-app.netlify.app/')

WebUI.click(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/button_Sign In'))

WebUI.setText(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/input_Email Address_email'), 'test@test.com')

WebUI.setEncryptedText(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/input_Password_password'), 'fzqqY0qJjYTe1x1wVJGv1g==')

WebUI.click(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/button_Sign In_1'))

WebUI.click(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/h2_Login successful'))

WebUI.click(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/h2_Login successful'))

WebUI.verifyElementText(findTestObject('Page_Automagic Test App/Signin Test Objects/Login Alert Dialog'), 'Login successful')

WebUI.click(findTestObject('Object Repository/Page_Automagic Test App/Signin Test Objects/button_Close'))

WebUI.closeBrowser()
