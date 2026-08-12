public class SumTo {

    public static int sumTo(int n) {
        if (n <= 0) {
            return 0;
        }
        return n + sumTo(n - 1);
    }

    public static int sumToLoop(int n) {
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        return sum;
    }

    public static void main(String[] args) {
        int n = 5;

        System.out.println("Recursive: " + sumTo(n));
        System.out.println("Loop: " + sumToLoop(n));
    }
}