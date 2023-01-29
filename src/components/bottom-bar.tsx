//cspell:ignore BottomBar
import React, { FC } from 'react'
React

const BottomBar: FC = () => pug`
	.flex.justify-between.w-full.px-16.bg-color.font-paragraph.text-sm.text-black-800
		.capitalize &#169; CAPSTONE Digital Solutions. All rights reserved.
		.capitalize terms and conditions
		.capitalize privacy policy.
		.flex.justify-between
`

export default BottomBar
