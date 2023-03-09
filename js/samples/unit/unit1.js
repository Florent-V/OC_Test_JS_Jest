/**
 * 
 * @param {string} name 
 */
export const sayHello = name => {
    if (!name) {
        return "Hello, World"
    }

    if (name === "Alexandra") {
      return "Hello Alexandra"
    }

    return `Hello, ${name}`
}
