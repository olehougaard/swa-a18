function viewModel(model) {
    let filter = ''
    let phones = model.phones

    function updateFilter(_filter) {
        filter = _filter.toLowerCase()
        phones = model.phones.filter(ph => ph.name.toLowerCase().includes(filter))
    }

    const vm = { }
    Object.defineProperty(vm, 'filter', { get: () => filter, set: updateFilter })
    Object.defineProperty(vm, 'phones', { get: () => phones, set: () => {} })

    return vm
}
