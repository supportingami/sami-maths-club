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
        let app = XCUIApplication()
        app.launch()



        // Use recording to get started writing UI tests.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    func takeScreenshots(){
        let app = XCUIApplication()
        sleep(20)
        snapshot("1-Launch-Screen")
        sleep(20)
        snapshot("2-Home-Screen")
        // TODO - navigate screens
        // https://forum.ionicframework.com/t/how-to-find-certain-components-in-uitests/131483/6
        // https://stackoverflow.com/questions/39646998/access-app-buttons-in-xcode-uitest-without-having-any-usable-text-for-referencin
        // https://medium.com/mobile-quality/automated-ui-testing-for-ios-apps-cfe128ae6411
    }

    func testLaunchPerformance() {
        if #available(macOS 10.15, iOS 13.0, tvOS 13.0, *) {
            // This measures how long it takes to launch your application.
            measure(metrics: [XCTOSSignpostMetric.applicationLaunch]) {
                XCUIApplication().launch()
            }
        }
    }
}
