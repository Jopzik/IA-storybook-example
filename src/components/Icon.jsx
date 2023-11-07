import PropTypes from 'prop-types'

const Icon = ({className, svg, size, color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={color}
    >
      {svg}
    </svg>
  )
}

Icon.propTypes = {
  svg: PropTypes.node.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
}

Icon.defaultProps = {
  size: '1.25em',
  className: '',
  color: 'currentColor',
}

export default Icon
