# Google Ads
> shows on Google services (Youtube, Search, ...), Google partner websites and apps
>> personalization: https://support.google.com/ads/answer/2662856#zippy=%2Ccontrol-personalized-ads-on-non-google-websites-and-apps-based-on-your-google-account-activity%2Cstop-getting-personalized-ads-from-other-ad-networks%2Cwhen-youre-signed-in%2Cwhen-youre-signed-out


## parameters
-> populates dimensions (titles) and metrics (values)
https://support.google.com/analytics/answer/11396839?hl=en#zippy=%2Cglobal-site-tag-websites%2Cgoogle-tag-manager-websites

# CMS
## wordpress
### plugins
- contact form 7
-- form event: https://contactform7.com/dom-events/

- ninja form
-- form event: https://ninjaforms.com/blog/event-tracking-for-ninja-forms-no-plugin/

### Third party (Chat box, ...)
- tawk: https://developer.tawk.to/jsapi/

## cafe24
### to connect:

## iamweb
### to connect:

## godomall
### to connect:

## wix 
### to connect:

## shopify
### to connect:

# Analytics
- https://developers.google.com/analytics?hl=en

- Events
https://developers.google.com/analytics/devguides/collection/gtagjs/events?hl=en

## GA4 vs UA
### GA4
- building block: event
- enhanced measure: automatic (scroll, file downloads, page view, video engagement, site search, ...)
- categorized report:
>1) life cycle
>> emgagement (was called behavior in UA)
>> monetization (was called ecommerce in UA)
>> retention (was called new users and returning users in UA)
>2) user
>3) event
- expanded predictive insights, deeper integraion with Google Ads, cross-device measurement capabilites, and granular data controls
- associated services such as event tracking, remarketing and ecommerce are migrated from UA


### UA
- building block: view (page view, screen views) / hit
- enhanced measure: need additional settings


## GA4
- events
https://support.google.com/analytics/answer/9322688?hl=en&ref_topic=9756175
> automatic events (only shows the event when it is applicable) -> recommended event -> custom event (*events in UA are automatically imported to GA4*)
>> automatically collected events
>> https://support.google.com/analytics/answer/9234069
>>> translation: 
>>>> 1) action in UA -> event_name in GA4
>>>> 2) event_category, event_label, value in UA -> parameters in GA4

- Data thresholds
https://support.google.com/analytics/answer/9445345#zippy=%2Cin-this-article 
> If your report or exploration is missing data, it may be because Google Analytics has applied a data threshold
>> low user count: Data in a report or exploration may be withheld when Google signals is enabled and you have a low user count in the specified date range
>> demographic information: If a report or exploration includes demographic information and the reporting identity relies on the device ID, the row containing that data may be withheld if there aren't enough total users
>> adjusting the data range
>> Exporting to BigQuery: Analytics doesn't export data from Google signals to BigQuery. As a result, you may see different event counts per event between Analytics and BigQuery
> when *google signal is on* -> demographics and interests data is collected -> sets threshorld to prvent inferring the identity of uses (when the number of list is small it is easer to look through to find the identity of a certain user based on demographics, interests, etc.)
>> *Data thresholds are system defined. You can't adjust them.*

- Reporting identity
> An individual customer often interacts with your business using different devices and platforms (different sessions). Google Analytics 4 can use four different methods to unify them into a single cross-device user journey
>> 1. User-ID : create your own persistent IDs for signed-in users, To use this identity space, you must consistently assign IDs to your users and include the IDs along with the data you send to Analytics. It is the most accurate identity space. 
>>> set up guide: https://support.google.com/analytics/answer/9213390?hl=en&ref_topic=9303474
>>> The User-ID feature lets you associate your own identifiers with individual users so you can connect their behavior across different sessions and on various devices and platforms. Analytics interprets each user ID as a separate user
>>> what you can do with User-ID
>>>> 1. Compare with non-signed in users
>>>> 2. user exploration: compare existing segment with temporary segment
>>>> 3. creating remarketing audiences: 
>>>>> If you are using User-ID, then Analytics only includes the user identifier and the device identifier for the last device associated with each logged-in user.
>>>>> If you're not using User-ID, Analytics includes all device and user identifiers in the audience information it exports to Ads.
>>> Users sometimes trigger events on your site or app before signing in or after signing out. In the first instance, Analytics uses the session ID to associate that session with the user ID provided when the user signs in. In the second instance, once a user signs out, Analytics stops associating any subsequent events with that user ID.
>>> limits:
>>>> 1. The user IDs you send to Google Analytics must be fewer than 256 characters long.
>>>> 2. Any data in your Analytics account collected and recorded prior to implementation won't be reprocessed and associated with a user ID.
>>>> 3. User-ID data collected in one property can't be shared or mixed with data in other properties.

For example, a user starts a session with no associated user ID and triggers Events 1 and 2. No user ID is associated with those events. The user then signs in and triggers Event 3. Events 1, 2, and 3 are now all associated with that user's ID. The user finally signs out and then triggers Event 4. No user ID is associated with Event 4. Events 1, 2, and 3 remain associated with that user.

>> 2. Google signals: Google signals is data from users who are signed in to Google
>>> set up guide: https://support.google.com/analytics/answer/9445345#zippy=%2Cin-this-article
>> 3. Device ID: On websites, the device ID gets its value from the client ID. On apps, the device ID is the app-instance ID.
>> 4. Modeling: When users decline Analytics identifiers (cookies, etc.), behavioral data for those users is unavailable. Analytics fills this gap by using the data of similar users who do accept cookies from the same property to model the behavior of the users who decline cookies.
>>> guide: https://support.google.com/analytics/answer/11161109
>> *Analytics creates a single user journey from all the data associated with the same identity. Because these identity spaces are used in all reports, they allow you to de-duplicate users and tell a more unified, holistic story about their relationships with your business.*
> Reporting identity options
>> 1) Blended: User-ID -> Google signals -> device ID -> modeling
>>> modeling: https://support.google.com/analytics/answer/11161109
>>> when users decline cookies on the site, it is not possible to tell if the 10 pageview event is coming from a single user or 10 deffent users -> modeling is based on other similar users who accepted cookies to identify the user who denied cookies
>> 2) Observed: User-ID -> Google signals -> device ID
>> 3) Device based
>>> *o get the full benefit of the first two options, you need to activate Google signals and collect user IDs.*
>>>> to activate google signals: https://support.google.com/analytics/answer/9445345#zippy=%2Cin-this-article
>>>>> When you activate Google signals, Analytics collects demographics and interests data when it is available. As a consequence, your reports are subject to data thresholds.(**The option you choose does not affect data collection or processing. You can switch between the options at any time without making any permanent impact on data.**)

- Google signals
https://support.google.com/analytics/answer/9445345#zippy=%2Cin-this-article
> Google signals are session data from sites which allows you to measure cross-device engagement without the need for user ID
>> that Google associates with users who have signed in to their Google accounts
>> and who have turned on Ads Personalization
> used to enable cross-device reporting, cross-device remarketing, and cross-device conversion export to Ads.
>>> to turn on *personalization*: https://support.google.com/ads/answer/2662856
> Google signals enables:
>> cross platform reporting: For your reports to include Google-signals data you need a monthly average of 500 users per day per property.
>>> Cross-device activity is tracked when you log-in to a Google account using the following:
>>>> 1) iOS devices (Google signals does not support iOS 14+ and upward devices (Apple no longer supports IDFA). For iOS 14+ devices, you must use User-ID tracking for cross-device tracking)
>>>> 2) Android devices
>>>> 3) Google Chrome
>>>> 4) Google Chrome web browser
>>>> 5) Other web browsers
>>>> 6) Client apps that require a Google account
>>>> 7) Other apps that require a Google account
>> remarketing with google analytics: Create remarketing audiences from your Google Analytics data, and share those audiences with your linked advertising accounts. When you activate Google signals, audiences that you create in Google Analytics and publish to Google Ads and other Google Marketing Platform advertising products can serve ads in Cross Device-eligible remarketing campaigns to Google users who have turned on Ads Personalization.
>> advertising reporting features
>> demographics and interests
> data collected won't be shared or used unless *data sharing seetings* or *link with google products* is enabled

- remarketing
> condition: 
>> 1) tag inserted (through either hard coding or syncing with existing UA) 
>> 2) 'data collection' under 'data settings' under the property is started
>> 3) Google signal is allowed (to measure cross-device engagement without the need for user ID -> everything is tracked with logged in information of the user)
> default remarketing list (audience):
>> 1) All Users
>> 2) Purchases

- ecommerce
https://developers.google.com/analytics/devguides/collection/ga4/ecommerce?client_type=gtm

- integration
https://support.google.com/analytics/topic/9306488

### audiences
- https://support.google.com/analytics/answer/9267572#zippy=%2Cin-this-article
- it takes 24 ~ 48 hours to appear when creating a new audience
- starts collection data after the audience is set (when importing audiences only within 30 days will be imported given it is at least 30 days or more)
(once imported they are separate audiences)
- when creating audiences there are three options: new | template | suggested audience
- membership duration: max 540(18months)
- creating audience:
-> scope (this decedes the time span of the audiences collections)
>>1) all sessions: all conditions must be met during the lifetime of the user 
>>2) single session (with in the same session): all conditions must be met within the same session
>>3) single event: all conditions must be met in a single event
-> dimensions: static VS dinymic (sets the standard as to how audience will be added)
--> static: once a condition is met, the audience stays in the group
--> dinymic: evaluates if a user belongs to a group constantly including or excluding depending on if the user meets the criterias
-> metrics: time-windowed
--> lifetime | periods
-> sequences
--> in order, anytime after | within time a frame
**When linking ADs - Analytics audience list is only available when personalized advertising and google signal are enabled**

## GTM
https://support.google.com/tagmanager#topic=3441530

- trigger types
https://support.google.com/tagmanager/topic/7679108?hl=en&ref_topic=7679384

- built in variables
https://support.google.com/tagmanager/answer/7182738?hl=en

## data sharing
Review the settings in your account, and this additional information here, to help you decide to turn these settings ON or OFF. If all settings are OFF, your Analytics data is only used to provide and maintain the Analytics service
https://support.google.com/analytics/answer/1011397#zippy=%2Cin-this-article
- Google products & services: this data can be used to improve the Google Ads system tools that you use to create, manage, and analyze your ad campaigns
- Benchmarking: When you turn this setting OFF, data can still flow between Analytics and the other Google products that are explicitly linked to any of your account properties, Benchmarking data lets you know where you stand in your industry and contributes to research analyses that uncover important market trends
- Technical support: You benefit when this setting is ON because Google support could access your account to troubleshoot and help you find solutions if you report an issue in your account.
- Account specialists: When you turn the first setting ON, these specialists will be able to look at and assess the efficacy of different implementation strategies and account configurations

# Google ads
- https://developers.google.com/google-ads
- https://support.google.com/google-ads/#topic=10286612
- how google ad manager works with google ads
https://support.google.com/google-ads/answer/2472739?hl=en

## Enhanced Conversion
- when a user clicks an Ads gclid is attached and when th user make a purchase(converts) the gclid is matched against the id in Ads (which also created when the Ads was clicked). But since it is dependent on cookies when cookies are disabled the conversion is lost -> to solve this EC uses gmail (or other google info a user has) to compensate the lost of cookie data.
- safe: gmail is hashed with SHA256 and sent with SSL
- only matched data is encrypted and the rest is deleted
### condition:
> sitewide tag (either Gtag.js or GTM tag)
> CT source must be from Ads (ones created on Ads: conversions from Analytic and offline are not supported yet)
> submitted data must be clear text
> URL must be **https**

## biding
- Pick the right bid strategy
-> maximize click (website tragic) > target impression share (specific page, awareness)> maximize conversion without CPA or ROAS (conversion) > maximize conversion with CPA (leads, transaction) > maximize conversion with ROAS (qualified leads, sales)
-> Know when to use seasonality adjustments with Smart Bidding : additional information related to temporary conversion rate changes.
--> major change in conversion rates will temporarily occur for one to seven days for an unprecedented reason such as a promotion (O)
--> seasonal period such as back-to-school time, the seasonal period to apply for more than seven days. (X)
https://support.google.com/google-ads/answer/6167148

- attribution models
https://support.google.com/google-ads/answer/6259715?hl=en-GB

- maximize conversion
https://support.google.com/google-ads/answer/7381968?hl=en

# data retention
https://support.google.com/analytics/answer/7667196
> applys to user-level and event-level data associated with cookies, user-identifires, and advertising identifiers
> *While the retention period and user-activity reset controls cover event and user-level data stored by Google Analytics, certain user-keyed data (such as age, gender, interests) is by default deleted by Google Analytics after six months of inactivity for a given user for a Universal Analytics property or after two months for a Google Analytics 4 property.*
> length:
>> For Google-signal data: 26 months (max)
>> For GA4 (non Analytics 360 version), retention of user-level data, including conversions, can be set to a maximum of 14 months. For all other event data, you can choose the length of retention: 2 months | 14 months
>> For UA, the setting applies to user-level and event-level data. You can choose: 14 months | 26 months | 38 months | 50 months | Do not automatically expire *Increasing the retention period or changing it to Do not automatically expire, however, does not affect data that you have already collected. For example, data collected when 14 months was in effect will still be deleted 14 months after it was collected even if you change the retention period to 26 months.* **Keep in mind that standard aggregated Google Analytics reporting is not affected. The user and event data managed by this setting is needed only when you use certain advanced features like applying custom segments to reports or creating unusual custom reports.**
>>> If you reduce the retention period, then any affected data is deleted during the next monthly process. For example, if you change from 26 months to 14 months, then any data older than 14 months is deleted during the next monthly process.
> Reset on new activity: when 'on' -> reset the retention period of the user identifier with each new event from that user (thus setting the expiration date to current time plus retention period)

If you increase the retention period, or change it to Do not automatically expire for a Universal Analytics property, it does not affect data that you have already collected. For example, data collected when 14 months was in effect will still be deleted 14 months after it was collected even if you change the retention period to 26 months. If you increase the retention period for a Google Analytics 4 property the change is applied to data that you have already collected.

## responsive display ads
- Upload your own display ads
https://support.google.com/google-ads/answer/9050314

- Manage your responsive display ads
https://support.google.com/google-ads/answer/9050310

- Create a responsive display ad
https://support.google.com/google-ads/answer/7005917

# Merchant
- unsupported shopping content 
https://support.google.com/merchants/answer/6150006
- condition:
> Payment information
> Contact information
> Terms  & condition or FAQ page
> Privacy policy
> Return and Refund Policy
> SSL certificate
> Retail website
> Language and currency in the website

- Healthcare & medicines
https://support.google.com/merchants/answer/6150151

- Unapproved pharmaceuticals and supplements
https://support.google.com/merchants/answer/6165956

- Show your products for free on Google (free listing attr)
https://support.google.com/merchants/answer/9199328?hl=en

- Link your Merchant Center account to a third-party platform
https://support.google.com/merchants/answer/9843619

- File upload (XML)
http://tagteam-tdcx.com/wp-content/uploads/woo-product-feed-pro/xml/SMwq5FNKv3l3tc1VMIwNbD1UYusvtOQT.xml

- File upload (RSS 2.0 specification)
https://support.google.com/merchants/answer/160589?hl=en


https://support.google.com/merchants/topic/7294002?hl=en&ref_topic=7294771

https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt

https://support.google.com/merchants/answer/6324478

https://developers.google.com/search/docs/advanced/structured-data

https://moz.com/blog/json-ld-for-beginners

## Smart campaign
- where they appear
https://support.google.com/google-ads/answer/10091265?hl=en

## SEO (Search Engine Optimization)
https://developers.google.com/search/docs

@lediemquynh

# Study materials
- UA -> GA4 why data migration is impossible
https://measureschool.com/ga4-migration/#:~:text=It%20is%20impossible%20to%20migrate%20historical%20data%20from,a%20different%20tool%20with%20a%20new%20data%20model.
