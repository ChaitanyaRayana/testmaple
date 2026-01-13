import React, { forwardRef } from 'react'

/**
 * Reusable Input component
 * Props:
 * - label: string label shown above the control
 * - id: input id (optional, generated from label if not provided)
 * - value, defaultValue, onChange: controlled/uncontrolled support
 * - placeholder, type
 * - error: string (when present, shows error state/message)
 * - helpText: small helper text below the input
 * - iconLeft, iconRight: React nodes to render inside the input
 * - textarea: boolean to render a textarea instead of input
 * - rows: textarea rows
 * - className: additional wrapper classes
 */

const baseInputClasses =
	'block w-full rounded-lg border bg-white text-black px-4 py-2 text-sm placeholder:text-gray-700 focus:outline-none focus:ring-2'

const Input = forwardRef(function Input(
	{
		label,
		id,
		value,
		defaultValue,
		onChange,
		placeholder,
		type = 'text',
		error,
		helpText,
		iconLeft,
		iconRight,
		textarea = false,
		rows = 3,
		className = '',
		required = false,
		disabled = false,
		...props
	},
	ref
 ) {
	const inputId = id || (label ? label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined)

	const errorClasses = error
		? 'border-red-300 focus:ring-red-300'
		: 'border-gray-200 focus:ring-[#226fb7]'

	// padding when icons are present
	const paddingLeft = iconLeft ? 'pl-10' : ''
	const paddingRight = iconRight ? 'pr-10' : ''

	const finalInputClasses = `${baseInputClasses} ${errorClasses} ${paddingLeft} ${paddingRight}`

	return (
		<div className={`w-full ${className}`}>
			{label && (
				<label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-2">
					{label} {required ? <span className="text-red-500">*</span> : null}
				</label>
			)}

			<div className="relative">
				{iconLeft && (
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						{iconLeft}
					</div>
				)}

				{textarea ? (
					<textarea
						id={inputId}
						ref={ref}
						className={`${finalInputClasses} resize-none h-auto ${textarea ? '' : ''}`}
						rows={rows}
						placeholder={placeholder}
						value={value}
						defaultValue={defaultValue}
						onChange={onChange}
						aria-invalid={!!error}
						disabled={disabled}
						{...props}
					/>
				) : (
					<input
						id={inputId}
						ref={ref}
						type={type}
						className={finalInputClasses}
						placeholder={placeholder}
						value={value}
						defaultValue={defaultValue}
						onChange={onChange}
						aria-invalid={!!error}
						disabled={disabled}
						{...props}
					/>
				)}

				{iconRight && (
					<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-auto">
						{iconRight}
					</div>
				)}
			</div>

			{helpText && !error && (
				<p className="mt-2 text-xs text-gray-500">{helpText}</p>
			)}

			{error && (
				<p className="mt-2 text-xs text-[red-600]">{error}</p>
			)}
		</div>
	)
})

export default Input
