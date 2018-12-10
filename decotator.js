function FormField(type, displayText) {
    this.type = type || "text";
    this.displayText = displayText || "";
}
FormField.prototype = {
    createElement: function () {
        this.element = document.createElement('input');
        this.element.setAttribute('type', this.type);
        this.element.setAttribute('placeholder', this.displayText);
        return this.element;
    },
    isValid: function () {
        return this.element.value !== "";
    }
};
function FormFieldDecorator(formField) {
    this.formField = formField;
}
FormFieldDecorator.prototype = {
    createElement: function () {
        this.formField.createElement();
    },
    isValid: function () {
        this.formField.isValid();
    }
};
function MaxLengthFieldDecorator(formField, maxLength) {
    FormFieldDecorator.call(this, formField);
    this.maxLength = maxLength || 100;
}
MaxLengthFieldDecorator.prototype = new FormFieldDecorator();
MaxLengthFieldDecorator.prototype.createElement = function () {
    var element = this.formField.createElement();
    element.setAttribute('maxlength', this.maxLength);
    return element;
};
function AutoCompleteFieldDecorator(formField, autocomplete) {
    FormFieldDecorator.call(this, formField);
    this.autocomplete = autocomplete || "on";
}
AutoCompleteFieldDecorator.prototype = new FormFieldDecorator();
AutoCompleteFieldDecorator.prototype.createElement = function () {
    var element = this.formField.createElement();
    element.setAttribute('autocomplete', this.autocomplete);
    return element;
};

var form = document.createElement('form'),
    formField = new FormField('search', 'Enter your search term');
formField = new MaxLengthFieldDecorator(formField, 255);
formField = new AutoCompleteFieldDecorator(formField, 'off');
form.appendChild(formField.createElement());
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formField.isValid()) {
        form.submit();
    } else {
        alert('Please correct the issues in the form field.');
    }
}, false);
window.onload = function (e) {
    document.body.appendChild(form);
};