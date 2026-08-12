import java.util.Arrays;

class Student {
    String name;
    double cgpa;

    Student(String name, double cgpa) {
        this.name = name;
        this.cgpa = cgpa;
    }

    @Override
    public String toString() {
        return name + " - " + cgpa;
    }
}

public class Main {
    public static void main(String[] args) {

        Student[] students = {
            new Student("Rahim", 3.50),
            new Student("Karim", 3.90),
            new Student("Nadia", 3.75),
            new Student("Sara", 3.95)
        };

        Arrays.sort(students,
            (a, b) -> Double.compare(b.cgpa, a.cgpa)
        );

        for (Student student : students) {
            System.out.println(student);
        }
    }
}
