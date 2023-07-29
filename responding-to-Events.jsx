function MyButton() {
	function handleClick() {
		alert('u clicked me!');
	}
	return (
		<button onClick={handleClick}>
			Click me
		</button>
	);
}
//Do not call the event handler function: you only need to pass it down.
//React will call your event handler when the user clicks the button.
ReactDOM.render(<MyButton/>, document.querySelector("body"));