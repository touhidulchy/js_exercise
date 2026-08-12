import java.util.HashMap;
import java.util.Map;

public class MostFrequentElement {

    public static int mostFrequentElement(int[] arr) {
        Map<Integer, Integer> frequency = new HashMap<>();

        int mostFrequent = arr[0];
        int maxCount = 0;

        for (int value : arr) {
            int count = frequency.getOrDefault(value, 0) + 1;

            frequency.put(value, count);

            if (count > maxCount) {
                maxCount = count;
                mostFrequent = value;
            }
        }

        return mostFrequent;
    }

    public static void main(String[] args) {
        int[] arr = {4, 2, 4, 3, 2, 4, 5};

        int result = mostFrequentElement(arr);

        System.out.println("Most frequent element: " + result);
    }
}