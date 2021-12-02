What is a HTML Form?

The form element is a shell container that contains interative controls for submitting information.

The action attribute specifies where the form data should be sent when submitted - for example www.myserver.com or www.amazon.com

When you submit the form a HTTP request is sent.

The Method attribute specifies which HTTP method you would like to use.

Specifying a value of GET means the browser will add the form contents to the end of the URL. 
GET is generally used for simple forms where security is not a concern.

Specifying a value of POST means the browser will send the data to the web server to be processed. 
This is necessary when adding data to a database, or when submitting sensitive information, such as passwords.



The input element is used to create different form controls. The type attribute for input is where the magic happens. 

Changing the type can dramatically alter the input behaviour and appearance. 

Types include : text - that defines a single line input field for example somewhere you might enter your name or a password.

heckbox, buttonS, password, color, number range time/date  - These all affect the input type the user can use.



The label represents a caption and is associated with an item in the user interface. 

They're really important for accessiblity as the label and its associated item are linked behind the scenes.

If someone is using a screen reasder the screen reader knows exactly what thext belongs to the input type.

This link is made using the ID attribute on the input element.

Then we use the FOR attribute on the label -- THE ID AND FOR VALUES MUST BE THE SAME VALUE TO CREATE THE ASSOCIATION.




