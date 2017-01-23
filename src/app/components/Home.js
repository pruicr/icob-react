import React from 'react'
import { Link } from 'react-router'

export const Home = () => {
  return (
    <div className="col-sm-8">
      <p>It Cannoli Be... is a new dessert food truck here on the Treasure Coast. Based out of the quaint and beautiful Stuart, Florida, we serve up cannolis in a variety of flavors. In addition to our regular appearances during the week, you can find us at special events. For information about where you can find us, check out our <Link to={"/schedule"}>scheduling page</Link>.</p>
	    <p>If you're interested in having us cater your next event, please visit our <Link to={"/catering"}>catering page</Link> for more information.</p>
    </div>
  )
}
