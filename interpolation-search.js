debugger

// Javascript program to implement Interpolation Search

// If x is present in arr[0..n-1], then returns
// index of it, else returns -1.

function interpolationSearch(arr, lo, hi, x){
let pos;

// Since array is sorted, an element present
// in array must be in range defined by corner

if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
	
	// Probing the position with keeping
	// uniform distribution in mind.
	pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));;
	
	// Condition of target found
		if (arr[pos] == x){
		return pos;
		}

		// If x is larger, x is in right sub array
		if (arr[pos] < x){
		return interpolationSearch(arr, pos + 1, hi, x);
		}

		// If x is smaller, x is in left sub array
		if (arr[pos] > x){
		return interpolationSearch(arr, lo, pos - 1, x);
		}
	}
	return -1;
}

// Driver Code
let arr = [10, 12, 13, 16, 18, 19, 20, 21, 
		22, 23, 24, 33, 35, 42, 47];

let n = arr.length;

// Element to be searched
let x = 18
let index = interpolationSearch(arr, 0, n - 1, x);

// If element was found
if (index != -1){
document.write(`Element found at index ${index}`)
}else{
document.write("Element not found");
}

// This code is contributed by _saurabh_jaiswal


