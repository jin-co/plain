# Google Ads

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

## iamweb

## godomall

## wix 

# Analytics
- https://developers.google.com/analytics?hl=en

- Events
https://developers.google.com/analytics/devguides/collection/gtagjs/events?hl=en

## GA4
- events
https://support.google.com/analytics/answer/9322688?hl=en&ref_topic=9756175

- Data thresholds
> If your report or exploration is missing data, it may be because Google Analytics has applied a data threshold
>> *Data thresholds are system defined. You can't adjust them.
https://support.google.com/analytics/answer/9383630

- Reporting identity
> An individual customer often interacts with your business using different devices and platforms (different sessions). Google Analytics 4 can use four different methods to unify them into a single cross-device user journey

### audiences
- https://support.google.com/analytics/answer/9267572#zippy=%2Cin-this-article
- it takes 24 ~ 48 hours to appear when creating a new audience
- starts collection data after the audience is set (when importing audiences only within 30 days will be imported given it is at least 30 days or more)
(once imported they are separate audiences)
- when creating audiences there are three options: new | template | suggested audience
- membership duration: max 540(18months)
- creating audience:
-> scope
--> all sessions | single session | single event
-> static VS dinymic
--> static: once a condition is met, the audience stays in the group
--> dinymic: evaluates if a user belongs to a group constantly including or excluding depending on if the user meets the criterias
-> time-windowed
--> lifetime | periods
-> sequences
--> in order, anytime after | within time a frame

## GTM
https://support.google.com/tagmanager#topic=3441530

- trigger types
https://support.google.com/tagmanager/topic/7679108?hl=en&ref_topic=7679384

- built in variables
https://support.google.com/tagmanager/answer/7182738?hl=en

# Google ads
- https://developers.google.com/google-ads
- https://support.google.com/google-ads/#topic=10286612
- how google ad manager works with google ads
https://support.google.com/google-ads/answer/2472739?hl=en

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
