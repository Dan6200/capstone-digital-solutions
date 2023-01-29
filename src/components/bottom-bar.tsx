//cspell:ignore BottomBar
import React, { FC } from 'react'
React

const BottomBar: FC = () => pug`
	.flex.justify-between.w-full.px-16.bg-color
		.capitalize CAPSTONE Digital Solutions. All rights reserved.
		.capitalize terms and conditions
		.capitalize privacy policy.
		.flex.justify-between
`

export default BottomBar
