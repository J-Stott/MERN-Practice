//prevents undefined classNames when using css modules

export function getClassName(classes, className){
    if(classes[className] === undefined) {
        return "";
    }

    return classes[className];
}