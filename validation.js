// Checking for undefined/null
function isUndefinedOrNull(value) {
    // standard way to check. This works because == is based on abstract equality comparison, which compares null and undefined as true.
    if (value == null) {
        
    }

    // above syntax is equivalent to 
   if (value === undefined || value === null) {
        
   }

    // In JavaScript an undefined variable is a variable that as never been declared, or never assigned a value. 
    // Let's say you declare var a; for instance, then a will be undefined, because it was never assigned any value.
    
	// checks if value is undefined, if not, check value if falsy
	// # Safest check
    if (typeof value !== undefined || !el) {
        // this solution isn't exclusive to undefined or null. !variable will be true for any falsy value: 0NE FUN
		// 0
		// NaN
		// Empty string ("")
		// False
		// Undefined
		// Null

		// Note that this approach only works if all of the falsy values should be excluded (or included.) For instance, if a value of 0 or "" was meaningful, then the if above would not function correctly.
    }
	
	if (value) {
		// this checks for truthy value, meaning if it's not falsy. 
	}	

}

// The basic difference between == and === is that if the operands are of different types, === will always return false while == will convert one or both operands into the same type using rules that lead to some slightly unintuitive behaviour.
// Primitives in Javascripts are: BOFUNS
// Boolean, Object, Function, Undefined, Number, String. Everything else is Object

// When we say a value is "truthy". we mean that it coerces to true when evaluated in boolean context.