## LifeCycle Hooks (React Assignment 6)
### Nervous Child

![Child](https://m.media-amazon.com/images/M/MV5BMTgxMzc2OTQwOV5BMl5BanBnXkFtZTgwODQ2OTgwNjE@._V1_.jpg)

## **Scenario:**

*Imagine a scenario, there’s a Kid who’s going to perform in front of Judges and People. He’s
nervous as well.*

### Tasks:

1. Import this component into your 'App.js' and provide a prop `dressColor` to the Kid with any color value and check if the Kid’s component is affected with that color!
2. In 'App.js' before rendering the Kid Component, increase the volume to 5 
`state =  {volume : 5}` **Hint: componentWillMount()**
3. So programmatically in 'Kid.js', you need to add the steps into a state
`state =  {danceSteps : ['step1','step2']}`. **Hint: componentDidMount()**
4. Render this component in 'App.js', you’ll get the button for help, on clicking it, it should send the steps to the Kid.js component and kid should remember these steps and start performing as well. **Hint: getDerivedStateFromProps()**
5. Render this component in 'App.js', you’ll get the button for Appreciate Performance, on clicking it, it should send the applaud status to the Kid.js component and kid’s emotion should change to ‘happy’. **Hint: getDerivedStateFromProps()**
6. In 'Judges.js', use `Provide stars` button to increase the stars, but make sure if the increament is going for more than 5, don’t show the increase one in the render. Render should show 5 stars only. **Hint: shouldComponentUpdate()**
7. Using `provideStars` method, tell the Kid component that he’s qualified and stop the performance.
**Hint: Use ComponentDidUpdate() and call the `qualified()` method from in it on a condition to prevent infinte looping state.**
8. Provide a button “Ask the Kid to Leave the Show” in 'App.js' that will unmount the Kid component.
9. On unmounting the Kid, unmount the Judges component as well.
**Hint: Use componentWillUnmount() in 'Kid.js'**

## Answer: 

* ***[this repo](https://github.com/GMT95/lifecycle_hooks)***
* ***[Live Preview](https://gmt95.github.io/lifecycle_hooks/)***


***

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
