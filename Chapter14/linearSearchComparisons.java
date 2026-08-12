public static int linearSearchComparisons(int[] arr, int target) {
    int comparisons = 0;

    for (int i = 0; i < arr.length; i++) {
        comparisons++;

        if (arr[i] == target) {
            return comparisons;
        }
    }

    return comparisons;
}