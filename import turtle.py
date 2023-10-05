import turtle

s = turtle.getscreen()

loadWindow = turtle.Screen()

turtle.speed(2)

for i in range(100):
    turtle.circle(10*i)
    turtle.circle(-10*i)
    turtle.left(i)

turtle.exitonclick()