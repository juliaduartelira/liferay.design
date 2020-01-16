import { Heading, Link, AnimateIn, Flex, Button } from 'components/atoms'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from './styles.module.scss'

export class Card extends Component {
	static propTypes = {
		place: PropTypes.string,
		date: PropTypes.string,
		ctaUrl: PropTypes.string,
		cta: PropTypes.string,
	}

	render() {
		const { place, date, ctaUrl, cta } = this.props

		const baseDelay = '1.6'

		return (
			<Flex direction="column" justify="flex-end" className={styles.wrapper}>
				<AnimateIn delay={baseDelay * 1.1 + 's'}>
					<div className={styles.details}>
						<AnimateIn delay={baseDelay * 1.2 + 's'}>
							<Heading color="mainl2" className={styles.heading} level={2}>{place}</Heading>
						</AnimateIn>
						<AnimateIn delay={baseDelay * 1.24 + 's'}>
							<Heading color='mainl5' className={styles.heading}  level={2}>{date}</Heading>
						</AnimateIn>
					</div>
					<AnimateIn delay={baseDelay * 1.3 + 's'}>
						<Link to={ctaUrl}>
							<Button padding="medium" className={styles.button} size="initial">{cta}</Button>
						</Link>
					</AnimateIn>
				</AnimateIn>
			</Flex>
		)
	}
}

export default Card
