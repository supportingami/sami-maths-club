//
//  AutomatedScreenshots.swift
//  AutomatedScreenshots
//
//  Created by Chris on 31/08/2020.
// NOTES:
// https://masilotti.com/ui-testing-cheat-sheet/#how-to-tap-links-in-a-web-view
// https://forum.ionicframework.com/t/how-to-find-certain-components-in-uitests/131483/6
// https://stackoverflow.com/questions/39646998/access-app-buttons-in-xcode-uitest-without-having-any-usable-text-for-referencin
// https://medium.com/mobile-quality/automated-ui-testing-for-ios-apps-cfe128ae6411
// https://stackoverflow.com/questions/46373411/is-it-possible-to-xctest-text-fields-in-a-webview
// https://stackoverflow.com/questions/41442932/ios-xcuitests-access-element-by-accessibility
// https://developer.apple.com/documentation/xctest/xcuielement/1500791-descendants
// https://medium.com/@pilot34/work-with-sfsafariviewcontroller-or-wkwebview-in-xcode-ui-tests-8b14fd281a1f
// *** https://useyourloaf.com/blog/ui-testing-quick-guide/ ***
// *** https://www.hackingwithswift.com/articles/148/xcode-ui-testing-cheat-sheet ***
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

    func testScreenshots(){
      let app = XCUIApplication()
      let problemEl = waitForEl(ariaLabel: "apple-teaser")
      snapshot("1-Home-Screen")
      problemEl.tap()
      snapshot("2-Problem")
      // not always required as snapshot waits for animations to end, but just in case
      // sleep(1)
      let notesEl = waitForEl(ariaLabel: "facilitator-notes", accessor: "button")
      notesEl.tap()
      snapshot("3-Notes")
    }

    func testNotes1(){
      let problemEl = waitForEl(ariaLabel: "apple-teaser")
      problemEl.tap()
      let notesEl = waitForEl(ariaLabel: "facilitator-notes", accessor: "button")
      notesEl.tap()
    }
    func testNotes2(){
      let problemEl = waitForEl(ariaLabel: "apple-teaser")
      problemEl.tap()
      let notesEl = waitForEl(ariaLabel: "facilitator-notes")
      notesEl.tap()
    }


    func waitForEl(ariaLabel: String, accessor: String = "other") -> XCUIElement {
      let app = XCUIApplication()
      // list of accessors https://www.hackingwithswift.com/articles/148/xcode-ui-testing-cheat-sheet
      // most web elements seem to respond to 'otherElements', known exceptions:
      // <button> - only button
      // <h1>, <h2>... - staticText or otherElements
      // <a> - ??? maybe app.Links or otherElements
      let el: XCUIElement
      if accessor == "button" {
        el = app.buttons[ariaLabel]
      }
      else if accessor == "staticText" {
        el = app.staticTexts[ariaLabel]
      }
      else {
        el = app.otherElements[ariaLabel]
      }
      let expectation = existsExpectation(object: el)
      waitForExpectation(expectation: expectation, time: 30)
      return el
    }

    func printDebug(){
      // TODO work locally to print debugDescription and see all elements with identifiers
    }
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
