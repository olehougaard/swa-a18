function model() {
    const phone = (name, snippet, age) => {
        const ph = {}
        Object.defineProperty(ph, 'name', { get: () => name })
        Object.defineProperty(ph, 'snippet', { get: () => snippet })
        Object.defineProperty(ph, 'age', { get: () => age })
        return ph
    }

    let phones = [
        phone('Nexus S', 'Fast just got faster with Nexus S.', 1), 
        phone('Motorola XOOM with Wi-Fi', 'The Next, Next Generation tablet.', 2),
        phone('MOTOROLA XOOM', 'The Next, Next Generation tablet.', 3 )
      ]

    return { phones }
}
