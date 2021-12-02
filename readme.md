What is a HTML Form?

The form element is a shell container that contains interative controls for submitting information.

The action attribute specifies where the form data should be sent when submitted - for example www.myserver.com or www.amazon.com

When you submit the form a HTTP request is sent.

The Method attribute specifies which HTTP method you would like to use.

Specifying a value of GET means the browser will add the form contents to the end of the URL. 
GET is generally used for simple forms where security is not a concern.

Specifying a value of POST means the browser will send the data to the web server to be processed. 
This is necessary when adding data to a database, or when submitting sensitive information, such as passwords.

------------------------------------------------------------------------------------------------------------------------------------------------------------

The input HTML element is used to create different form controls in order for us to accept data from the user. The type attribute for input is where the magic happens. 

Changing the type can dramatically alter the input behaviour and appearance. 

Types include : text - that defines a single line input field for example somewhere you might enter your name or a password.

The name attribute specifies the name of a form.
The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.
The name attribute is an identifier attribute that’s used for sending data through the HTML form elements.
Without the name attribute, any value you have in the HTML form element such as <input>, <select>, or <textarea> element will be excluded from the form submission.

Checkbox, buttonS (these can be programmed to control custom functionality e.g. assigned it to an event handler function, buttons can send out data when clicked on ), password, color, number range time/date  - These all affect the input type the user can use.

--------------------------------------------------------------------------------------------------------------------------------------------------------------

The label represents a caption and is associated with an item in the user interface. 

They're really important for accessiblity as the label and its associated item are linked behind the scenes.

If someone is using a screen reasder the screen reader knows exactly what thext belongs to the input type.

This link is made using the ID attribute on the input element.

Then we use the FOR attribute on the label -- THE ID AND FOR VALUES MUST BE THE SAME VALUE TO CREATE THE ASSOCIATION.




