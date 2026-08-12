import java.util.HashMap;
import java.util.Map;

public class FirstNonRepeating {

    public static char firstNonRepeatingCharacter(String str) {
        Map<Character, Integer> frequency = new HashMap<>();

        for (char ch : str.toCharArray()) {
            frequency.put(ch, frequency.getOrDefault(ch, 0) + 1);
        }

        for (char ch : str.toCharArray()) {
            if (frequency.get(ch) == 1) {
                return ch;
            }
        }

        return '\0';
    }

    public static void main(String[] args) {
        String str = "swiss";

        char result = firstNonRepeatingCharacter(str);

        if (result != '\0') {
            System.out.println("First non-repeating character: " + result);
        } else {
            System.out.println("No non-repeating character found.");
        }
    }
}