//
//  AutomatedScreenshots.swift
//  AutomatedScreenshots
//
//  Created by Chris on 31/08/2020.
//

import XCTest

class AutomatedScreenshots: XCTestCase {

    override func setUp() {
        // Put setup code here. This method is called before the invocation of each test method in the class.
        // Setup for automated screenshots with fastlane
        let app = XCUIApplication()
        setupSnapshot(app)
        app.launch()
        // In UI tests it is usually best to stop immediately when a failure occurs.
        continueAfterFailure = false

        // In UI tests it’s important to set the initial state - such as interface orientation - required for your tests before they run. The setUp method is a good place to do this.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() {
        // UI tests must launch the application that they test.
        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }


    func testLaunchPerformance() {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
                XCUIApplication().launch()
            }
        }
    }
    // all functions starting with 'test' will be excuted
    func testTakeScreenshots(){

        // https://masilotti.com/ui-testing-cheat-sheet/#how-to-tap-links-in-a-web-view
        // https://forum.ionicframework.com/t/how-to-find-certain-components-in-uitests/131483/6
        // https://stackoverflow.com/questions/39646998/access-app-buttons-in-xcode-uitest-without-having-any-usable-text-for-referencin
        // https://medium.com/mobile-quality/automated-ui-testing-for-ios-apps-cfe128ae6411
        // https://stackoverflow.com/questions/46373411/is-it-possible-to-xctest-text-fields-in-a-webview
        // https://stackoverflow.com/questions/41442932/ios-xcuitests-access-element-by-accessibility
        // https://developer.apple.com/documentation/xctest/xcuielement/1500791-descendants
        // https://medium.com/@pilot34/work-with-sfsafariviewcontroller-or-wkwebview-in-xcode-ui-tests-8b14fd281a1f
        // *** https://useyourloaf.com/blog/ui-testing-quick-guide/ ***
    }
    func testDivAccess1(){
      let app = XCUIApplication()
      let problemCard = app.otherElements["test-div"]
      let problemCardExpectation = existsExpectation(object: problemCard)
      waitForExpectation(expectation: problemCardExpectation, time: 30)
    }
    func testButtonAccess1(){
      let app = XCUIApplication()
      let problemCard = app.buttons["test-button"]
      let problemCardExpectation = existsExpectation(object: problemCard)
      waitForExpectation(expectation: problemCardExpectation, time: 30)
    }
    func testButtonAccess2(){
      let app = XCUIApplication()
      let problemCard = app.otherElements["test-button"]
      let problemCardExpectation = existsExpectation(object: problemCard)
      waitForExpectation(expectation: problemCardExpectation, time: 30)
    }

    func testStaticTextsAccess(){
      let app = XCUIApplication()
      let text = app.staticTexts["static-text"]
      let expectation = existsExpectation(object: text)
      waitForExpectation(expectation: expectation, time: 30)
      // XCTAssertEqual("Expected string", myLabel.label)
    }
    func testStaticTextAccess2(){
      let app = XCUIApplication()
      let problemCard = app.otherElements["static-text"]
      let problemCardExpectation = existsExpectation(object: problemCard)
      waitForExpectation(expectation: problemCardExpectation, time: 30)
    }
    // func testUrlAccess(){

    // }
    // TODO work locally to print debugDescription and see all elements with identifiers
    // func link test(){
      // might work baseed just on text... ?
      // app.links.["your link text"].press(forDuration: 0.1)
    // }
    // func testScreenshot1(){
    //   let app = XCUIApplication()
    //   // for divs, can access if aria-label provided
    //   let problemCard = app.otherElements["apple-teaser"]
    //   let problemCardExpectation = existsExpectation(object: problemCard)
    //   waitForExpectation(expectation: problemCardExpectation, time: 30)
    //   snapshot("1-Home-Screen")
    //   problemCard.tap()
    // }
    // func testScreenshot2(){
    //   testScreenshot1()
    //   let facilitatorNotesButton = app.buttons["facilitator-notes"]
    //   let facilitatorNotesExpectation = existsExpectation(object: facilitatorNotesButton)
    //   waitForExpectation(expectation: facilitatorNotesExpectation, time: 30)
    //   snapshot("2-Problem-Screen")
    //   facilitatorNotesButton.tap()
    // }
    // func testScreenshot(3){
    //   testScreenshot2()
    //   snapshot("3-Notes-Screen")
    // }

    func waitForExpectation(expectation:XCTestExpectation, time: Double, safe: Bool = false) {
      let result: XCTWaiter.Result = XCTWaiter().wait(for: [expectation], timeout: time)
      if !safe && result != .completed {
        // if expectation is strict and was not fulfilled
        XCTFail("Condition was not satisfied during \(time) seconds")
      }
      return ()
    }

    func existsExpectation(object: Any) -> XCTNSPredicateExpectation{
      return XCTNSPredicateExpectation(
          predicate: NSPredicate(format: "exists == true"),  object: object)
    }
}
