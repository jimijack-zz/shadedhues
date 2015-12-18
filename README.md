<p align="center">
<img src="https://i.imgur.com/mGOsZlF.png" width="300px"/>
</p>

___

ShadedHues is my artist profile name.  Its about grabbing hold of what elements of color you can, reproduce them in shades of black and white, and leaving the viewer the opportunity to find their own colorful interpretation.

This application is the place for me to offer my artist portfolio to everybody.  While not all pieces are offered as prints, this is the place to see both prints and portfolio pieces.  This is also set to be the location to reach me directly, for inquiries into your own potential commissioned pieces.

"I welcome any opportunity to create a new portrait, be it the occasional inspiration drawn from a photograph or a request from someone wanting to preserve a memory."

-- j

___

###Important Links

Link for online deployment
- [https://shadedhues.herokuapp.com](https://shadedhues.herokuapp.com)

Link to be impressed by Trello display
- [https://trello.com/b/BKHL2vF0/shadedhues](https://trello.com/b/BKHL2vF0/shadedhues)


___

###Technologies Used

Development | Deployment
------------|------|-------------------
HTML| Heroku
CSS | MongoLab
Bootstrap|
JavaScript/jQuery |
Node.js |
Express |
MongoDB |
Angular |
Git |
GitHub |

___


#####Prints Model

Parameters|Value|
----------|-----|
`title`|String|
`category`|String|
`size`|String|
`price`|String|
`imageURL`|String|

#####Future User Model
 -for Contact Form Inquiries

Parameters|Value|
----------|-----|
`name`|String|
`email`|String|
`phone`|String|
`message`|String|

___

###Development Process

This project really came to fruition after the project intro.  When extra emphasis was put on the value of the project in terms of importance to me personally I really tried to evaluate my priorities.  At the time I had put quite a bit of thought into the Personal WebPage project as I'd spent quite a bit of time refining my resue and taking advice from Outcomes.

The final push came when it was mentioned there was positive feedback towards an ecommerce type of site.  Like a bolt of lightning I thought about connecting the artwork with the market, because it's really become an important part of who I am today.

I immediately began with brainstorming what I wanted to be able to provide to users of the site, and tried to draw on my own experience as a consumer.  I of course wanted a nice clean look, one that stood out from most other shop sites.  Then came the Wireframing, which I devoted most of a day on.  I made it a point to take the advice to not write code and really put more emphasis on the planning process.  This was invaluable advice.

From there it was workflow design on the Trello board I started and also kept up with thru the process.  Whichever snags I came across were quickly re-evaluated and prioritized accordingly so adjustments, if any, could be made.

Ultimately this kept my workflow moving forward on a fairly regular basis. This project did not come without its snags, but while waiting to try and come up with a resolve I had other elements I could work on while trying to figure a solution to the problem at hand.

#####A list of major hurdles I came across:

 * Some push-to-github issues because of a large file I included.  I deleted it from my folder but the record remained, so it wouldn't let me push to github for two days. - thanks Dean.
 
 * Heroku deployment always throws a curveball in the process.  Lots of errors requiring an updated Procfile and .env file. 
 
 * Adding paypal as an option for the prints.  I couldn't use the option on the prints-view because each print requires its own button, and with ui-routing I pulled the data from my DB according to category.  I can fix with time, need to include the code for each button in the database.
 
 * The contact form.  I'd like to implement it directly thru this website but most of the tutorials I researched were just slightly different that what I could use with this MEAN stack.  I'm sure I can find a way to implement it in the future.  In the meantime there is a link to a Wordpress contact form I set up with my email.
 
 * The portrait-design request form I'd like to build for people to be able to take a 5-step process to design their commissioned piece.  Its going to require a category (people, pet, landscape, object), what size, what surface (paper, wood, white board), frame desired if any and whether or not you want a timelapse video of the drawing as well.
