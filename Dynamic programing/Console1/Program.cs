using System;

namespace Console1
{
    class Program
    {
        static void Main(string[] args)
        {
            //int n = 5;
            //int[] cache = new int[n + 1];
            //Console.WriteLine(FibonacciMemoization(n,cache));

            Console.WriteLine(FibonacciTabulation(20));
        }
        public static int FibonacciMemoization(int n, int[] cache)
        {
            if (n <= 0)
            {
                return 0;
            }
            if (n == 1)
            {
                return 1;
            }
            if (cache[n] > 0)
            {
                return cache[n];
            }
            return cache[n] = FibonacciMemoization(n - 1, cache) + FibonacciMemoization(n - 2, cache);
        }
        public static int FibonacciTabulation(int n)
        {
            if (n <= 1) { return n; }
            int[] arr = new int[n+1];
            arr[0] = 0;
            arr[1] = 1;
            for(int i = 2; i <= n; i++)
            {
                arr[i] = arr[i - 2] + arr[i - 1];
            }
            return arr[n];
        }
    }
}
