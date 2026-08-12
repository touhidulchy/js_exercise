public static int countOccurrences(int[] arr, int target) {
    int count = 0;

    for (int value : arr) {
        if (value == target) {
            count++;
        }
    }

    return count;
}
