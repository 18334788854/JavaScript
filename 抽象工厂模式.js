function FormFieldFactory() {
    this.availableTypes = {
        TEXT: 'text',
        EMAIL: 'email',
        BUTTON: 'button'
    };
}
FormFieldFactory.prototype = {
    makeField: function () {
        throw new Error("This method should not be called directly.")
    }
};

function Html5FormFieldFactory() {
}
Html5FormFieldFactory.prototype = new FormFieldFactory();
console.log(Html5FormFieldFactory.prototype);
Html5FormFieldFactory.prototype.makeField = function (options) {
    var options = options || {},
        type = options.type || this.availableTypes.TEXT,
        displayText = options.displayText || "",
        field;
    console.log(this.availableTypes.TEXT);
    switch (type) {
        case this.availableTypes.TEXT:
            field = new Html5TextField(displayText);
            break;
        case this.availableTypes.EMAIL:
            field = new Html5EmailField(displayText);
            break;
        case this.availableTypes.BUTTON:
            field = new ButtonField(displayText);
            break;
        default:
            throw new Error("Invalid field type specified: " + type);
    }
    return field;

};
console.log(Html5FormFieldFactory.prototype);
function Html4FormFieldFactory() {
}
Html4FormFieldFactory.prototype = new FormFieldFactory();

Html4FormFieldFactory.prototype.makeField = function (options) {
    var options = options || {},
        type = options.type || this.availableTypes.TEXT,
        displayText = options.displayText || "",
        field;
    switch (type) {
        case this.availableTypes.TEXT:
        case this.availableTypes.EMAIL:
            field = new Html4TextField(displayText);
            break;
        case this.availableTypes.BUTTON:
            field = new ButtonField(displayText);
            break;
        default:
            throw new Error("Invalid field type specified: " + type);
    }
    return field
};
function Html5TextField(displayText) {
    this.displayText = displayText || "";
}
Html5TextField.prototype.getElement = function () {
    var textField = document.createElement('input');
    textField.setAttribute('type', 'text');
    textField.setAttribute('placeholder', this.displayText);
    return textField;
};
function Html4TextField(displayText) {
    this.displayText = displayText || "";
}
Html4TextField.prototype.getElement = function () {
    var wrapper = document.createElement("div"),
        textField = document.createElement("input"),
        textFieldId = "text-field-" + Math.floor(Math.random() * 999),
        label = document.createElement("label"),
        labelText = document.createTextNode(this.displayText);
    textField.setAttribute("type", "text");
    textField.setAttribute("id", textFieldId);
    label.setAttribute("for", textFieldId);
    label.appendChild(labelText);
    wrapper.appendChild(textField);
    wrapper.appendChild(label);
    return wrapper;
};
function Html5EmailField(displayText) {
    this.displayText = displayText || "";
}
Html5EmailField.prototype.getElement = function () {
    var emailField = document.createElement('input');
    emailField.setAttribute('type', 'email');
    emailField.setAttribute('placeholder', this.displayText);
    return emailField;
};
function ButtonField(displayText) {
    this.displayText = displayText;
}
ButtonField.prototype.getElement = function () {
    var button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerHTML = this.displayText;
    return button;
};

var supportHtml5FormField = (function () {
        var field = document.createElement("input");
        field.setAttribute("type", "email");
        return field.type === "email";
    }()),
    formFieldFactory = supportHtml5FormField ? new Html5FormFieldFactory() : new Html4FormFieldFactory(),
    textField = formFieldFactory.makeField({
        type: 'text',
        displayText: 'Enter the first line of your address'
    }),
    emailField = formFieldFactory.makeField({
        type: 'email',
        displayText: 'Enter your email address'
    }),
    buttonField = formFieldFactory.makeField({
        type: formFieldFactory.availableTypes.BUTTON,
        displayText: 'Submit'
    });

window.onload = function (e) {
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
    bodyElement.appendChild(buttonField.getElement());
}