public class RecursiveReverse {

    public static String reverseString(String str) {
        if (str.length() <= 1) {
            return str;
        }

        return str.charAt(str.length() - 1)
                + reverseString(str.substring(0, str.length() - 1));
    }

    public static void main(String[] args) {
        String text = "HELLO";

        System.out.println("Original: " + text);
        System.out.println("Reversed: " + reverseString(text));
    }
}