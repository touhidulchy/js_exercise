import java.util.Stack;

public class Main {

    public static boolean isBalanced(String code) {
        Stack<Character> stack = new Stack<>();

        for (char ch : code.toCharArray()) {

            // Opening brackets
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            }

            // Closing brackets
            else if (ch == ')' || ch == '}' || ch == ']') {

                if (stack.isEmpty()) {
                    return false;
                }

                char open = stack.pop();

                if ((ch == ')' && open != '(') ||
                    (ch == '}' && open != '{') ||
                    (ch == ']' && open != '[')) {
                    return false;
                }
            }

            // All other characters are ignored
        }

        return stack.isEmpty();
    }

    public static void main(String[] args) {

        String code = """
            public static void main(String[] args) {
                if (x > 10) {
                    System.out.println("Hello");
                }
            }
            """;

        System.out.println(isBalanced(code));
    }
}