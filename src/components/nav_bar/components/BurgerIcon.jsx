import React from 'react'
import PropTypes from 'prop-types'
import './BurgerIcon.scss'

const BurgerIcon = (props)=> {
        const {isOpen, onClick} = props
        let burgerClass = ''
        if(isOpen) burgerClass= 'open'
        return (
            <div onClick={onClick} className={burgerClass} id="nav-icon3">
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
        )
}

BurgerIcon.defaultProps = {
        isOpen: false
}

BurgerIcon.propTypes = {
        isOpen: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
}

export default BurgerIcon