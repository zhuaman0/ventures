<template>
  <div class="tw-px-4 sm:tw-px-10 md:tw-px-40 tw-py-12">
    <h2 class="tw-text-xl tw-font-bold tw-mb-6">Редактирование раздела</h2>

    <v-form>
      <div class="tw-grid tw-grid-cols-1 md:tw-max-w-[600px] tw-bg-white tw-p-8">

        <v-text-field
          v-model.number="form.investmentAmount"
          label="Размер инвестиционных средств"
          prefix="$"
          type="number"
          variant="outlined"
          class="tw-mb-6"
        />

        <v-autocomplete
          v-model="form.innovationMethods"
          :items="innovationOptions"
          label="Методы работы с инновациями"
          multiple
          chips
          closable-chips
          variant="outlined"
          class="tw-mb-6"
        />

        <v-autocomplete
          v-model="form.startupStages"
          :items="startupStageOptions"
          label="Релевантные стадии развития стартапов"
          multiple
          chips
          closable-chips
          variant="outlined"
          class="tw-mb-6"
        />

        <v-autocomplete
          v-model="form.startupTechnologies"
          :items="startupTechnologyOptions"
          label="Релевантные технологии стартапов"
          multiple
          chips
          closable-chips
          variant="outlined"
          class="tw-mb-6"
        />

        <v-autocomplete
          v-model="form.startupIndustries"
          :items="startupIndustryOptions"
          label="Релевантные индустрии стартапов"
          multiple
          chips
          closable-chips
          variant="outlined"
          class="tw-mb-6"
        />

        <p class="tw-mb-2">У вашей компании есть опыт пилотирования со стартапами?</p>
        <v-radio-group v-model="form.hasPilotingExperience" inline>
          <v-radio label="Да" :value="true" class="custom-radio" />
          <v-radio label="Нет" :value="false" class="custom-radio" />
        </v-radio-group>

        <p class="tw-mt-6 tw-mb-2">Инвестирует ли ваша компания в стартапы?</p>
        <v-radio-group v-model="form.investsInStartups" inline>
          <v-radio label="Да" :value="true" class="custom-radio" />
          <v-radio label="Нет" :value="false" class="custom-radio" />
        </v-radio-group>

        <div class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-mt-8 tw-gap-4">
          <v-btn
            variant="text"
            class="tw-font-medium tw-text-base hover:tw-underline tw-w-full md:tw-w-auto"
            @click="cancelChanges"
          >
            Отменить
          </v-btn>

          <v-btn
            @click="saveChanges"
            class="tw-px-6 tw-py-3 tw-text-base tw-font-medium tw-w-full md:tw-w-auto"
            style="background-color: #36CE9F !important; color: white !important;"
          >
            Сохранить изменения
          </v-btn>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  investmentAmount: '1000000',
  innovationMethods: ['Корпоративный акселератор'],
  startupStages: ['MVP', 'Подсевная стадия', 'Ранний рост'],
  startupTechnologies: ['3D printing', 'Blockchain', 'AR / VR'],
  startupIndustries: ['AdTech&MarTech', 'Logistics&SupplyChainTech'],
  hasPilotingExperience: false,
  investsInStartups: false,
})

const innovationOptions = ['Корпоративный акселератор', 'Инкубатор', 'Open innovation']
const startupStageOptions = ['MVP', 'Подсевная стадия', 'Ранний рост']
const startupTechnologyOptions = ['3D printing', 'Blockchain', 'AR / VR', 'AI / ML']
const startupIndustryOptions = ['AdTech&MarTech', 'Logistics&SupplyChainTech', 'FinTech', 'MedTech']

const saveChanges = () => {
  console.log('Saving:', form.value)
}

const cancelChanges = () => {
  console.log('Canceled')
}
</script>

<style scoped>
.v-chip {
  background-color: #E7E4FF !important;
  color: black !important;
}

.custom-radio .v-radio__ripple,
.custom-radio .v-radio__input:checked + .v-radio__ripple,
.custom-radio .v-radio__input:focus + .v-radio__ripple {
  color: #36CE9F !important;
  border-color: #36CE9F !important;
}

.custom-radio .v-radio__input:checked + .v-radio__ripple::before {
  background-color: #36CE9F !important;
}
</style>
