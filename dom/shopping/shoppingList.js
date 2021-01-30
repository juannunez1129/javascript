
    // Do the following steps in this file, and make sure this file is linked to the shopping-list.html file

    //done

    // 1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    
    const unorderedList = document.createElement('ul')
    const input = document.createElement('input')
    const buttonOne = document.createElement('button')

    //done
    
    // 2. Create a function that will run in response to the button being clicked.
    //done
     // 3. Inside the function body, start off by storing the current value of the input element in a variable.
     //done
    // 4. Next, empty the input element by setting its value to an empty string — ''.
    //done
    button.onclick = function(){
        let userInputs = input.value
        input.value = ''
    }
    
    //done
    // 5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    

    const listItem = document.createElement('li')
    const span = document.createElement('span')
    const buttonTwo = document.createElement('button')
    
    //done
    
    // 6. Append the span and the button as children of the list item.
    
    listItem.appendChild(span)
    listItem.appendChild(button)
    
    //done

    // 7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    
    span.textContent = userInputs
    buttonOne.textContent = 'Delete'
    
    // 8. Append the list item as a child of the list.
    
    
    
    // 9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    
    
    
    // 10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.