function FormField(type, displayText) {
    this.type = type || "text";
    this.displayText = displayText || "";
    this.element = document.createElement('input');
    this.element.setAttribute('type', this.type);
    this.element.setAttribute('placeholder', this.displayText);
}
FormField.prototype = {
    getElement: function () {
        return this.element;
    },
    isValid: function () {
        return this.element.value !== "";
    }
};
FormField = (function (FormField) {
    function FormFieldProxy(type, displayText) {
        this.type = type;
        this.displayText = displayText;
    }

    FormFieldProxy.prototype = {
        formField: null,
        initialize: function () {
            if (!this.formField) {
                this.formField = new FormField(this.type, this.displayText);
            }
        },
        getElement: function () {
            this.initialize();
            return this.formField.getElement();
        },
        isValid: function () {
            this.initialize();
            return this.formField.isValid();
        }
    };
    return FormFieldProxy;
}(FormField));