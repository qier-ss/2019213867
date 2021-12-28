const BubbleSort = {
    Java:
        '<span class="blue">void</span> swap(<span class="blue">int</span>[] arr, <span class="blue">int</span> i, <span class="blue">int</span> j) {\n' +
        '    <span class="blue">int</span> temp = arr[i];\n' +
        '    arr[i] = arr[j];\n' +
        '    arr[j] = temp;\n' +
        '}\n' +
        '\n' +
        '<span class="blue">void</span> bubbleSort(<span class="blue">int</span>[] arr) {\n' +
        '    \n' +
        '    <span class="green">// Loop in the range of unsorted elements</span>\n' +
        '    <span class="blue">for</span> (<span class="blue">int</span> i = arr.length - 1; i >= 0; i--) {\n' +
        '        boolean swapped = <span class="blue">true</span>;\n' +
        '        \n' +
        '        <span class="green">// Bubble largest element to the end</span>\n' +
        '        <span class="blue">for</span> (<span class="blue">int</span> j = 0; j < i; j++) {\n' +
        '            <span class="blue">if</span> (arr[j] > arr[j + 1]) {\n' +
        '                swap(arr, j, j + 1);\n' +
        '                swapped = <span class="blue">false</span>;\n' +
        '            }\n' +
        '        }\n' +
        '        \n' +
        '        <span class="green">// Array is already sorted as there are no swaps in this iteration</span>\n' +
        '        <span class="blue">if</span> (swapped) {\n' +
        '            <span class="blue">break</span>;\n' +
        '        }\n' +
        '    }\n' +
        '}\n',
    JavaScript:
        '<span class="blue">function</span> bubbleSort(arr) {\n\n' +
        '  <span class="green">// Loop in the range of unsorted elements</span>\n' +
        '  <span class="blue">for</span> (<span class="blue">let</span> i = arr.length - 1; i >= 0; i--) {\n' +
        '    <span class="blue">let</span> swapped = <span class="blue">true</span>;\n\n' +
        '    <span class="green">// Bubble largest element to the end</span>\n' +
        '    <span class="blue">for</span> (<span class="blue">let</span> j = 0; j < i; j++) {\n' +
        '      <span class="blue">if</span> (arr[j] > arr[j + 1]) {\n' +
        '        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];\n' +
        '        swapped = <span class="blue">false</span>;\n' +
        '      }\n' +
        '    }\n\n' +
        '    <span class="green">// Array is already sorted as there are no swaps in this iteration</span>\n' +
        '    <span class="blue">if</span> (swapped) {\n' +
        '      <span class="blue">break</span>;\n' +
        '    }\n' +
        '  }\n' +
        '}\n',
    Python:
        '<span class="blue">def</span> bubble_sort(arr):\n' +
        '\n' +
        '    <span class="green"># Loop in the range of unsorted elements</span>\n' +
        '    <span class="blue">for</span> i <span class="blue">in</span> range(len(arr) - 1, 0, -1):\n' +
        '        swapped = <span class="blue">True</span>\n' +
        '\n' +
        '        <span class="green"># Bubble largest element to the end</span>\n' +
        '        <span class="blue">for</span> j <span class="blue">in</span> range(i):\n' +
        '            <span class="blue">if</span> arr[j] > arr[j + 1]:\n' +
        '                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n' +
        '                swapped = <span class="blue">False</span>\n' +
        '\n' +
        '        <span class="green"># Array is already sorted as there are no swaps in this iteration</span>\n' +
        '        <span class="blue">if</span> swapped:\n' +
        '            <span class="blue">break</span>\n',
    'C/C++':
        '<span class="blue">void</span> swap(<span class="blue">int</span> *a, <span class="blue">int</span> *b)\n' +
        '{\n' +
        '    <span class="blue">int</span> temp = *a;\n' +
        '    *a = *b;\n' +
        '    *b = temp;\n' +
        '}\n' +
        '\n' +
        '<span class="blue">void</span> bubbleSort(<span class="blue">int</span> arr[], int len)\n' +
        '{\n' +
        '    <span class="blue">int</span> i, j;\n' +
        '    bool swapped;\n' +
        '\n' +
        '    <span class="blue">// Loop in the range of unsorted elements</span>\n' +
        '    <span class="blue">for</span> (i = len - 1; i >= 0; --i)\n' +
        '    {\n' +
        '        swapped = <span class="blue">true</span>;\n' +
        '\n' +
        '        <span class="green">// Bubble largest element to the end</span>\n' +
        '        <span class="blue">for</span> (j = 0; j < i; ++j)\n' +
        '        {\n' +
        '            <span class="blue">if</span> (arr[j] > arr[j + 1])\n' +
        '            {\n' +
        '                swap(&arr[j], &arr[j + 1]);\n' +
        '                swapped = <span class="blue">false</span>;\n' +
        '            }\n' +
        '        }\n' +
        '\n' +
        '        <span class="green">// Array is already sorted as there are no swaps in this iteration</span>\n' +
        '        <span class="blue">if</span> (swapped)\n' +
        '        {\n' +
        '            <span class="blue">break</span>;\n' +
        '        }\n' +
        '    }\n' +
        '}\n',
};