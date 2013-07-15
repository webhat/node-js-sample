describe("PrimeTest", function () {
    it("The primes to be factored", function () {
        var primes = getprimes(11);

        console.dir(primes);

        expect(primes).toContain(2);
        expect(primes).toContain(3);
        //expect(primes).not.toContain(4);
        expect(primes).toContain(5);
        //expect(primes).not.toContain(6);
        expect(primes).toContain(7);
        //expect(primes).not.toContain(8);
        //expect(primes).not.toContain(9);
        //expect(primes).not.toContain(10);
        expect(primes).toContain(11);
    });

    it("Test one prime", function () {
        var prime = testprime(3);
        assertTrue(prime);
    });
});