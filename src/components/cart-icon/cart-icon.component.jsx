import { useDispatch, useSelector } from 'react-redux';

import {
	selectCartCount,
	selectIsCartOpen
} from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
	const dispatch = useDispatch();

	const cartCount = useSelector(selectCartCount);
	const isCartOpen = useSelector(selectIsCartOpen);

	const isCartOpenHandler = () => dispatch(setIsCartOpen(!isCartOpen));

	return (
		<CartIconContainer onClick={isCartOpenHandler}>
			<ShoppingIcon />
			<ItemCount>{cartCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;
