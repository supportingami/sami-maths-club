package io.c2dev.samimathsclub

import android.util.Log
import android.view.View
import android.view.ViewGroup
import androidx.test.espresso.web.sugar.Web.onWebView
import androidx.test.espresso.web.assertion.WebViewAssertions.webMatches
import androidx.test.espresso.web.model.Atoms.getCurrentUrl
import androidx.test.espresso.web.webdriver.DriverAtoms.*
import androidx.test.espresso.web.webdriver.Locator
import androidx.test.filters.LargeTest
import androidx.test.rule.ActivityTestRule
import androidx.test.runner.AndroidJUnit4
import org.hamcrest.Description
import org.hamcrest.Matcher
import org.hamcrest.Matchers.allOf
import org.hamcrest.Matchers.containsString
import org.hamcrest.TypeSafeMatcher
import org.hamcrest.core.IsInstanceOf
import org.junit.Rule
import org.junit.Test
import org.junit.Before
import org.junit.runner.RunWith
import tools.fastlane.screengrab.Screengrab

val TAG = "APP_TEST";

@LargeTest
@RunWith(AndroidJUnit4::class)
class ScreenshotTest {

  @get:Rule
  val activityRule = ActivityTestRule(MainActivity::class.java)
  // http://junit.sourceforge.net/javadoc/org/junit/Before.html
  @Before
  fun initialize() {
    onWebView().forceJavascriptEnabled()
  }
  @Test fun headerDisplayed(){
    Log.d(TAG,"Start Test 1")
    val el =  onWebView().withElement(findElement(Locator.TAG_NAME, "h2"))
//    el.check(webMatches(getText(), containsString("19 Parenting")))
    Screengrab.screenshot("1-Home");


  }
  @Test fun canGoToTopicsPage(){
    Log.d(TAG,"Start Test 2")
    val el =  onWebView().withElement(findElement(Locator.TAG_NAME, "h2"))
    Log.d(TAG,el.toString())
    el.perform(webClick()).check(webMatches(getCurrentUrl(), containsString("/pell-numbers")))
//    val el = onWebView().withElement(findElement(Locator.CSS_SELECTOR, "span[class=\"/nav-title\"]"))
//    el.perform((webClick())).check(webMatches(getCurrentUrl(), containsString("/topics")))
  }

  private fun childAtPosition(
    parentMatcher: Matcher<View>, position: Int): Matcher<View> {

    return object : TypeSafeMatcher<View>() {
      override fun describeTo(description: Description) {
        description.appendText("Child at position $position in parent ")
        parentMatcher.describeTo(description)
      }

      public override fun matchesSafely(view: View): Boolean {
        val parent = view.parent
        return parent is ViewGroup && parentMatcher.matches(parent)
          && view == parent.getChildAt(position)
      }
    }
  }
}
