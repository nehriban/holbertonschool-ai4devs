// Intended: Reverse a string and check if it is a palindrome
// Bug Type: Syntax error + NullPointerException

public class PalindromeChecker {

    public static String reverseString(String str) {
        String reversed = "";
        for (int i = str.length(); i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return reversed

    public static boolean isPalindrome(String str) {
        String reversed = reverseString(str);
        return str.equals(reversed);
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar"));
        System.out.println(isPalindrome("hello"));
        System.out.println(isPalindrome(null));
    }
}
