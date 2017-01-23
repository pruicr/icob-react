import React from 'react'

export const Instagram = () => {
  const styles = {
    border: 'none',
    overflow: 'hidden',
    width: '100%'
  }
  return (
    <div className="col-sm-4">
  		<p><strong>Our Instagram Feed</strong></p>
  		<iframe src="http://snapwidget.com/bd/?u=aXRjYW5ub2xpYmV8aW58MjAwfDF8MXx8eWVzfDB8bm9uZXxvblN0YXJ0fHllc3x5ZXM=&ve=180216" title="Instagram Widget" id="snapwidget" className="snapwidget-widget" allowTransparency="true" frameBorder="0" scrolling="yes" style={styles}></iframe>
  	</div>
  )
}
