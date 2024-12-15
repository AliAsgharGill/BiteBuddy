from database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Text
from sqlalchemy_utils.types import ChoiceType
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True)
    email = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    is_staff = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    orders = relationship("Order", back_populates="user")

    def __repr__(self):
        return f"<User {self.username}>"


class Order(Base):

    ORDER_STATUSES = (
        ("PENDING", "pending"),
        ("CONFIRMED", "confirmed"),
        ("PREPARED", "prepared"),
        ("OUT_FOR_DELIVERY", "out_for_delivery"),
        ("DELIVERED", "delivered"),
    )

    PIZZA_SIZES = (
        ("SMALL", "small"),
        ("MEDIUM", "medium"),
        ("LARGE", "large"),
        ("EXTRA_LARGE", "extra_large"),
    )

    PIZZA_FLAVOURS = (
        ("MARGHERITA", "margherita"),
        ("HAWAIIAN", "hawaiian"),
        ("VEGGIE", "veggie"),
        ("PEPPERONI", "pepperoni"),
        ("CHEESE", "cheese"),
        ("MEAT", "meat"),
        ("FAJITA", "fajita"),
        ("MEATLOVERS", "meatlovers"),
        ("BBQ_CHICKEN", "bbq_chicken"),
        ("BUFFALO_CHICKEN", "buffalo_chicken"),
        ("CHICKEN_TIKKA", "chicken_tikka"),
        ("CHICKEN_BBQ", "chicken_bbq"),
        ("CHICKEN_MARGHERITA", "chicken_margherita"),
        ("CHICKEN_BARBECUE", "chicken_barbecue"),
        ("CHICKEN_PEPPERONI", "chicken_pepperoni"),
        ("CHICKEN_HAWAIIAN", "chicken_hawaiian"),
        ("CHICKEN_SAUSAGE", "chicken_sausage"),
        ("CHICKEN_BACON", "chicken_bacon"),
        ("CHICKEN_CHEESE", "chicken_cheese"),
        ("CHICKEN_OLIVES", "chicken_olives"),
        ("CHICKEN_HAM", "chicken_ham"),
        ("CHICKEN_TOMATO", "chicken_tomato"),
    )

    PIZZA_VEGGIE_OPTIONS = (
        ("TOMATO", "tomato"),
        ("ONION", "onion"),
        ("CARROT", "carrot"),
        ("PEPPER", "pepper"),
        ("OLIVE", "olive"),
    )

    PIZZA_MEAT_OPTIONS = (
        ("CHICKEN", "chicken"),
        ("BEEF", "beef"),
        ("MUTTON", "mutton"),
        ("VEGGIES", "veggies"),
    )

    PIZZA_CRUSTS = (
        ("THIN_CRUST", "thin_crust"),
        ("THICK_CRUST", "thick_crust"),
    )

    PIZZA_TOPPINGS = (
        ("MUSHROOMS", "mushrooms"),
        ("PEPPERONI", "pepperoni"),
        ("ONIONS", "onions"),
        ("SAUSAGE", "sausage"),
        ("BACON", "bacon"),
        ("CHEESE", "cheese"),
        ("OLIVES", "olives"),
        ("HAM", "ham"),
        ("PINEAPPLE", "pineapple"),
        ("BELL_PEPPERS", "bell_peppers"),
        ("JALAPENOS", "jalapenos"),
        ("CHICKEN", "chicken"),
        ("BEEF", "beef"),
        ("PORK", "pork"),
        ("TOMATOES", "tomatoes"),
        ("GARLIC", "garlic"),
        ("BASIL", "basil"),
        ("OREGANO", "oregano"),
        ("PEPPER", "pepper"),
        ("SALT", "salt"),
        ("CHILI_FLAKES", "chili_flakes"),
        ("OLIVE_OIL", "olive_oil"),
        ("PESTO", "pesto"),
        ("BBQ_SAUCE", "bbq_sauce"),
        ("BUFFALO_SAUCE", "buffalo_sauce"),
        ("RANCH", "ranch"),
        ("BLUE_CHEESE", "blue_cheese"),
        ("PARMESAN", "parmesan"),
        ("MOZZARELLA", "mozzarella"),
        ("CHEDDAR", "cheddar"),
        ("FETA", "feta"),
        ("GOAT_CHEESE", "goat_cheese"),
        ("RICOTTA", "ricotta"),
        ("PROVOLONE", "provolone"),
        ("SWISS", "swiss"),
        ("BUTTER", "butter"),
    )

    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    quantity = Column(Integer, nullable=False)
    order_status = Column(
        ChoiceType(choices=ORDER_STATUSES), nullable=False, default="PENDING"
    )
    pizza_size = Column(
        ChoiceType(choices=PIZZA_SIZES), nullable=False, default="SMALL"
    )
    pizza_flavour = Column(
        ChoiceType(choices=PIZZA_FLAVOURS), nullable=False, default="VEGGIE"
    )
    pizza_veggie_options = Column(
        ChoiceType(choices=PIZZA_VEGGIE_OPTIONS), nullable=False, default="TOMATO"
    )
    pizza_meat_options = Column(
        ChoiceType(choices=PIZZA_MEAT_OPTIONS), nullable=False, default="CHICKEN"
    )
    pizza_crust = Column(
        ChoiceType(choices=PIZZA_CRUSTS), nullable=False, default="THIN_CRUST"
    )
    pizza_toppings = Column(
        ChoiceType(choices=PIZZA_TOPPINGS), nullable=False, default="MUSHROOMS"
    )
    special_instructions = Column(Text, nullable=True)
    user_id = Column(Integer, ForeignKey("user.id"), nullable=False)
    user = relationship("User", back_populates="orders")

    def __repr__(self):
        return f"<Order {self.id}>"
