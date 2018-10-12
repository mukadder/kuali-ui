/* Copyright © 2016 Kuali, Inc. - All Rights Reserved
 * You may use and modify this code under the terms of the Kuali, Inc.
 * Pre-Release License Agreement. You may not distribute it.
 *
 * You should have received a copy of the Kuali, Inc. Pre-Release License
 * Agreement with this file. If not, please write to license@kuali.co.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class BrandLogo extends PureComponent {
  static propTypes = {
    className: PropTypes.string
  }

  render () {
    const { className, ...rest } = this.props
    const classes = classnames('brand-logo', className)

    return (
      <svg
        aria-labelledby='brand-logo__title'
        className={classes}
        role='img'
        viewBox='0 0 72 26'
        xmlns='http://www.w3.org/2000/svg'
        {...rest}
      >
        <title id='brand-logo__title'>Kuali</title>
        <path d='M30.2404698,17.4619476 L30.2404698,8.1533101 L35.9412734,8.1533101 L35.9412734,25.2521548 L30.2404698,25.2521548 L30.2404698,24.0638181 C30.2404698,24.0638181 28.7988873,25.6152577 25.194931,25.6152577 C21.5909747,25.6152577 18.2491243,22.281313 18.2491243,18.3862094 L18.2491243,8.1533101 L23.9826911,8.1533101 L23.9826911,17.4619476 C23.9826911,19.4425087 25.5553266,20.4657986 27.0624356,20.4657986 C28.5695446,20.4657986 30.2404698,19.4425087 30.2404698,17.4619476 Z M57.9581702,3.23491656 L63.6589738,3.23491656 L63.6589738,25.2521548 L57.9581702,25.2521548 L57.9581702,3.23491656 Z M65.7558211,8.1533101 L71.4566248,8.1533101 L71.4566248,25.2191454 L65.7558211,25.2191454 L65.7558211,8.1533101 Z M68.6389862,6.46983312 C66.8657117,6.46983312 65.4281887,5.02151164 65.4281887,3.23491656 C65.4281887,1.44832148 66.8657117,0 68.6389862,0 C70.4122607,0 71.8497836,1.44832148 71.8497836,3.23491656 C71.8497836,5.02151164 70.4122607,6.46983312 68.6389862,6.46983312 Z M50.1605193,9.40766551 L50.1605193,8.1533101 L55.8613229,8.1533101 L55.8613229,25.2521548 L50.1605193,25.2521548 L50.1605193,24.2618742 C47.2773542,26.0773886 43.6406347,26.0773886 40.7902328,24.2618742 C36.7275912,21.6541353 35.5153513,16.2075922 38.1036472,12.1144324 C40.6919431,8.02127269 46.0978776,6.79992665 50.1605193,9.40766551 Z M50.4881517,17.3299101 C50.5536781,16.9998166 50.5536781,16.6367137 50.4881517,16.3066202 C50.2260457,14.0619842 48.1947249,12.4775353 45.9668246,12.7746195 C44.1648465,13.0056849 42.723264,14.4580965 42.4939213,16.2736109 C42.1990521,18.4852375 43.7716876,20.5318173 45.9668246,20.8289015 C48.1619617,21.1259857 50.1932825,19.5415368 50.4881517,17.3299101 Z M17.4628065,8.1533101 L12.6138471,14.1610123 L19.4941273,25.2521548 L13.0397692,25.2521548 L8.97712755,18.6832936 L5.70080363,22.7104346 L5.70080363,25.2521548 L0,25.2521548 L0,3.26792591 L5.70080363,3.26792591 L5.70080363,13.8309188 L10.2876571,8.1533101 L17.4628065,8.1533101 Z' />
      </svg>
    )
  }
}