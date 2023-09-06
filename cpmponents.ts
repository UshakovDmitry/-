      <!-- Отображаем список городов, если переменная isOpened истинна -->
      <div v-if="isOpened" data-test="dropdown-body" class="dropdown__body" :style="{ width: width + 'px' }">
        <ul class="dropdown__list">
          <!-- Проходим по каждому городу в списке и отображаем его -->
          <li
            v-for="item in items"
            :key="item"
            class="dropdown__item"
            @click="selectItem(item)"
          >
            <div class="dropdown__item__name">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>

