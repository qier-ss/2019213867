const SelectionSort = {
    Java:
        '<span class="blue">void</span> sort(<span class="blue">int</span>[] arr) {\n' +
        '    <span class="blue">int</span> n = arr.length;\n' +
        '    <span class="green">// One by one move boundary of unsorted subarray</span> \n' +
        '    <span class="blue">for</span> (int i = 0; i < n - 1; i++) {\n' +
        '        <span class="green">// Find the minimum element in unsorted array</span> \n' +
        '        <span class="blue">int</span> minIdx = i;\n' +
        '        <span class="blue">for</span> (int j = i + 1; j < n; j++) {\n' +
        '            <span class="blue">if</span> (arr[j] < arr[min_idx]) {\n' +
        '                minIdx = j;\n' +
        '            }\n' +
        '        }\n' +
        '        <span class="green">// Swap the found minimum element with the first element</span> \n' +
        '        <span class="blue">int</span> temp = arr[minIdx];\n' +
        '        arr[minIdx] = arr[i];\n' +
        '        arr[i] = temp;\n' +
        '    }\n' +
        '} \n',
    JavaScript:
        '<span class="blue">function</span> selectionSort(inputArr) {\n' +
        '  <span class="blue">let</span> n = inputArr.length;\n' +
        '  <span class="blue">for</span> (let i = 0; i < n - 1; i++) {\n' +
        '    <span class="green">// Finding the smallest number in the subarray</span>\n' +
        '    <span class="blue">let</span> min = i;\n' +
        '    <span class="blue">for</span> (let j = i + 1; j < n; j++) {\n' +
        '      <span class="blue">if</span> (inputArr[j] < inputArr[min]) {\n' +
        '        min = j;\n' +
        '      }\n' +
        '    }\n' +
        '    <span class="blue">if</span> (min != i) {\n' +
        '      <span class="green">// Swapping the elements</span>\n' +
        '      <span class="blue">let</span> tmp = inputArr[i];\n' +
        '      inputArr[i] = inputArr[min];\n' +
        '      inputArr[min] = tmp;\n' +
        '    }\n' +
        '  }\n' +
        '  <span class="blue">return</span> inputArr;\n' +
        '}\n',
    Python:
        '<span class="blue">def</span> selection_sort(L):\n' +
        '    <span class="green"># i indicates how many items were sorted</span>\n' +
        '    <span class="blue">for</span> i <span class="blue">in</span> range(len(L) - 1):\n' +
        '        <span class="green"># To find the minimum value of the unsorted segment</span>\n' +
        '        <span class="green"># We first assume that the first element is the lowest</span>\n' +
        '        min_index = i\n' +
        '        <span class="green"># We then use j to loop through the remaining elements</span>\n' +
        '        <span class="blue">for</span> j <span class="blue">in</span> range(i + 1, len(L) - 1):\n' +
        '            <span class="green"># Update the min_index if the element at j is lower than it</span>\n' +
        '            <span class="blue">if</span> L[j] < L[min_index]:\n' +
        '                min_index = j\n' +
        '        <span class="green"># After finding the lowest item of the unsorted regions,</span>\n' +
        '        <span class="green"># swap with the first unsorted item</span>\n' +
        '        L[i], L[min_index] = L[min_index], L[i]\n',
    'C/C++':
        '<span class="blue">void</span> selectionSort(<span class="blue">int</span> arr[], int n)\n' +
        '{\n' +
        '    <span class="blue">int</span> i, j, minIdx;\n' +
        '    <span class="green">// One by one move boundary of unsorted subarray</span> \n' +
        '    <span class="blue">for</span> (i = 0; i < n - 1; i++)\n' +
        '    {\n' +
        '        // Find the minimum element in unsorted array \n' +
        '        minIdx = i;\n' +
        '        <span class="blue">for</span> (j = i + 1; j < n; j++) \n' +
        '        {\n' +
        '            <span class="blue">if</span> (arr[j] < arr[min_idx]) \n' +
        '            {\n' +
        '                minIdx = j;\n' +
        '            }\n' +
        '        }\n' +
        '        <span class="green">// Swap the found minimum element with the first element</span> \n' +
        '        swap(&arr[minIdx], &arr[i]);\n' +
        '    }\n' +
        '} \n',
};