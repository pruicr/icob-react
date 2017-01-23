import React from 'react'
import { Link } from 'react-router'

export const Schedule = () => {
  return (
    <div className="col-sm-8 schedule">
      <p>Now you may be asking, &quot;Where can I get my hands on one of these tasty cannolis?&quot; You&#39;re in luck! You can check us out at the following locations at these dates and times:</p>
      <ul>
    		<li><strong>Monday, 10/24, 5pm-9pm</strong> | Food Truck Invasion<br/>
    		Indian Riverside Park | 1707 Northeast Indian River Drive, Jensen Beach, FL 34957</li>
    		<li><strong>Tuesday, 10/25, 5pm-9pm</strong> | Food Truck Invasion<br/>
    		Okeechobee County Agri-Civic Center & Fairgrounds | 4601 Highway 710, Okeechobee, FL 34972</li>
    		<li><strong>Fri, 10/28, 5-10pm | Sat, 10/29, 12-10pm | Sun 10/30, 1-6pm</strong> | Fall Fun Fest<br/>
    		Port St. Lucie Civic Center | 9221 Southeast Civic Center Place Port St. Lucie, FL 34952 (southeast corner of US1 & Walton Rd)</li>
    		<li><strong>Saturday, 11/12, 11am-4pm</strong> | Fall Festival<br/>
    		Renaissance Charter School at Tradition | 10900 SW Tradition Parkway, Port St. Lucie, FL 34987</li>
    	</ul>
      <p>Interested in having us cater your next event here in South Florida? Check out our <Link to={"/catering"}>catering page</Link> for more details.</p>
      <p>Check back often for updates on where we&#39;ll be &amp; when. Or, for updates in real-time, follow us on our <a href="http://www.facebook.com/itcannolibe" target="_blank">Facebook</a> and <a href="http://www.instagram.com/itcannolibe" target="_blank">Instagram</a>.</p>
	    <br/>
	    <br/>
    </div>
  )
}
