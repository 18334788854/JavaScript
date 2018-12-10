function FormField(type, displayText, stratege) {
    this.type = type || "text";
    this.displayText = displayText || "";
    this.element = document.createElement("input");
    this.element.setAttribute("type", this.type);
    this.label = document.createElement("label");
    this.label.innerHTML = this.displayText;
    if (stratege && typeof stratege.isValid === "function") {
        this.strategy = stratege;
    } else {
        this.strategy = {
            isValid: function () {
                return false;
            }
        }
    }

    // document.body.appendChild(this.label);
    // document.body.appendChild(this.element);
}
FormField.prototype = {
    getValue: function () {
        return this.element.value;
    },
    setValue: function (value) {
        this.element.value = value;
    },
    isValid: function () {
        return this.strategy.isValid.call(this);
    }
};
var textFieldStratege = {
        isValid: function () {
            return this.getValue() !== "";
        }
    },
    emailFieldStratege = {
        isValid: function () {
            var value = this.getValue();
            return value !== "" && value.indexOf("@") > 0 && value.indexOf(".", value.indexOf("@")) > 0;
        }
    },
    numberFieldStratege = {
        isValid: function () {
            var value = this.getValue();
            return !isNaN(parseInt(value, 10));
        }
    };
var textField = new FormField("text", "First name", textFieldStratege),
    emailField = new FormField("email", "Email", emailFieldStratege),
    numberField = new FormField("number", "Age", numberFieldStratege);
textField.setValue("xing jian");
emailField.setValue("250853852@qq.com");
numberField.setValue(23);
console.log(textField.isValid());
console.log(emailField.isValid());
console.log(numberField.isValid());
textField.setValue("");
emailField.setValue("250853852@qq");
numberField.setValue("sdas");
console.log(textField.isValid());
console.log(emailField.isValid());
console.log(numberField.isValid());
