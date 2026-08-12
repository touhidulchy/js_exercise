import java.util.Stack;

public class Main {
    public static String reverseString(String str) {
        Stack<Character> stack = new Stack<>();

        // Push every character onto the stack
        for (char ch : str.toCharArray()) {
            stack.push(ch);
        }

        // Pop characters to create the reversed string
        StringBuilder reversed = new StringBuilder();

        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }

        return reversed.toString();
    }

    public static void main(String[] args) {
        String str = "HELLO";

        System.out.println("Original: " + str);
        System.out.println("Reversed: " + reverseString(str));
    }
}